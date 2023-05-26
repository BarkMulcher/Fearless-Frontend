from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .acls import get_photo, get_weather_data
from .models import Conference, Location, State


class LocationListEncoder(ModelEncoder):
    model = Location
    properties = [
        "name",
        "picture_url",
        'id'
    ]


class LocationDetailEncoder(ModelEncoder):
    model = Location
    properties = [
        "name",
        "city",
        "room_count",
        "created",
        "updated",
        "picture_url",
    ]

    def get_extra_data(self, o):
        return {"state": o.state.abbreviation}


class ConferenceListEncoder(ModelEncoder):
    model = Conference
    properties = ["name"]


class ConferenceDetailEncoder(ModelEncoder):
    model = Conference
    properties = [
        "name",
        "description",
        "max_presentations",
        "max_attendees",
        "starts",
        "ends",
        "created",
        "updated",
        "location",
    ]
    encoders = {
        "location": LocationListEncoder(),
    }

@require_http_methods(['GET'])
def api_list_states(request):
    states = State.objects.all().order_by('name')
    state_list = []
    for i in states:
        state_dict = {
            'name': i.name,
            'abbreviation': i.abbreviation
        }
        state_list.append(state_dict)
    return JsonResponse({'states': state_list})

# @require_http_methods(['GET'])
# def api_list_venues(request):
#     venues = Location.objects.all()
#     venue_list = []


@require_http_methods(["GET", "POST"])
def api_list_conferences(request):

    if request.method == "GET":
        conferences = Conference.objects.all()
        return JsonResponse(
            {"conferences": conferences},
            encoder=ConferenceListEncoder,
        )
    else:
        content = json.loads(request.body)

        # Get the Location object and put it in the content dict
        try:
            location = Location.objects.get(id=content["location"])
            content["location"] = location
        except Location.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid location id"},
                status=400,
            )

        conference = Conference.objects.create(**content)
        return JsonResponse(
            conference,
            encoder=ConferenceDetailEncoder,
            safe=False,
        )


def api_show_conference(request, pk):

    conference = Conference.objects.get(id=pk)
    weather = get_weather_data(
        conference.location.city,
        conference.location.state.abbreviation,
    )
    return JsonResponse(
        {"conference": conference, "weather": weather},
        encoder=ConferenceDetailEncoder,
        safe=False,
    )


@require_http_methods(["GET", "POST"])
def api_list_locations(request):

    if request.method == "GET":
        locations = Location.objects.all()
        return JsonResponse(
            {"locations": locations},
            encoder=LocationListEncoder,
        )
    else:
        content = json.loads(request.body)

        try:
            state = State.objects.get(abbreviation=content["state"])
            content["state"] = state
        except State.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid state abbreviation"},
                status=400,
            )

        photo = get_photo(content["city"], content["state"].abbreviation)
        content.update(photo)
        location = Location.objects.create(**content)
        return JsonResponse(
            location,
            encoder=LocationDetailEncoder,
            safe=False,
        )


@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_location(request, pk):

    if request.method == "GET":
        location = Location.objects.get(id=pk)
        return JsonResponse(
            location,
            encoder=LocationDetailEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = Location.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        try:
            if "state" in content:
                state = State.objects.get(abbreviation=content["state"])
                content["state"] = state
        except State.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid state abbreviation"},
                status=400,
            )
        Location.objects.filter(id=pk).update(**content)
        location = Location.objects.get(id=pk)
        return JsonResponse(
            location,
            encoder=LocationDetailEncoder,
            safe=False,
        )
