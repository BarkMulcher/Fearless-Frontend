function createCard(
    conferenceTitle,
    conferenceDetails,
    photoUrl,
    formatStart,
    formatEnd,
    location
    ) {
    return `
    <div className="col-4">
      <div className="card shadow">
        <img src="${photoUrl}" className="card-img-top">
        <div className="card-body">
          <h5 className="card-title placeholder-glow">${conferenceTitle}</h5>
          <h6 className="card-subtitle placeholder-glow pb-3">${location}</h6>
          <p className="card-text placeholder-glow">${conferenceDetails}</p>
        </div>
        <div className='card-footer'>
            ${formatStart} - ${formatEnd}
        </div>
      </div>
    </div>
    `;
  }



window.addEventListener('DOMContentLoaded', async () => {
    const url = 'http://localhost:8000/api/conferences'


    try {
        const response = await fetch(url)
        console.log(response)
        if (!response.ok) {
            alert(response.statusText)
        } else {
            const data = await response.json()

            for (let conference of data.conferences) {
                // fetch details
                const detailUrl = `http://localhost:8000${conference.href}`
                const detailResponse = await fetch(detailUrl)


                if (detailResponse.ok) {

                    //  title info
                    const details = await detailResponse.json()
                    const conferenceTitle = details.conference.name
                    console.log(details)

                    // details info

                    const conferenceDetails = details.conference['description']

                    // photo url info

                    const photoUrl = details.conference.location.picture_url

                    // date info
                    const startDate = new Date((details.conference.starts))
                    const formatStart = `${startDate.getMonth()}/${startDate.getDate()}/${startDate.getFullYear()}`
                    const endDate = new Date((details.conference.ends))
                    const formatEnd = `${endDate.getMonth()}/${endDate.getDate()}/${endDate.getFullYear()}`

                    // location info
                    const location = details.conference.location.name

                    // format HTML
                    const html = createCard(conferenceTitle, conferenceDetails, photoUrl, formatStart, formatEnd, location)
                    const column = document.querySelector('.row');
                    column.innerHTML += html;


                }
            }

        }
    } catch (error) {
        alert(response.statusText)
    }

});
