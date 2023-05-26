window.addEventListener('DOMContentLoaded', async () => {

    const url="http://localhost:8000/api/conferences/";
    try {
        const response = await fetch(url);

        if(response.ok) {
            const data = await response.json();
            const selectTag = document.getElementById('conference');

            for(let conference of data.conferences) {
                const option = document.createElement('option');
                option.value = conference.href
                option.innerHTML = conference.name;
                selectTag.appendChild(option);
        }

            const formTag = document.getElementById('create-presentation-form');
            formTag.addEventListener('submit', async event => {
                event.preventDefault();

                const formData = new FormData(formTag);
                const conferenceHref = data['conference']
                const json = JSON.stringify(Object.fromEntries(formData));


                // Get information about selected option
                // const conferenceID = conferenceId1


                // Send data to server
                const presentationUrl = `http://localhost:8000/api/conferences/${conferenceHref}/presentations/`;
                const fetchConfig = {
                    method: "POST",
                    body: json,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };
                const response = await fetch(presentationUrl, fetchConfig);
                if (response.ok) {
                    formTag.reset();
                    const newPresentation = await response.json();
                    console.log(newPresentation);
                }
            })

        } else {
            throw new Error(" ");
        }

    } catch(e) {
        console.error(e);
    }
});
