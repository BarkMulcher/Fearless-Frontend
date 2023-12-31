window.addEventListener('DOMContentLoaded', async () => {
    const fetchUrl = 'http://localhost:8000/api/states/'
    try {
        const response = await fetch(fetchUrl)
        if (response.ok) {
            const data = await response.json()
            const selectTag = document.getElementById('state')
            for ( let state of data.states) {
                let option = document.createElement('option')
                option.value = state.abbreviation
                option.innerHTML = state.name
                selectTag.appendChild(option)
            }

            const formTag = document.getElementById('create-location-form');
            formTag.addEventListener('submit', async event => {
                event.preventDefault()
                const formData = new FormData(formTag)
                const json = JSON.stringify(Object.fromEntries(formData))

                const locationUrl = 'http://localhost:8000/api/locations/';
                const fetchConfig = {
                    method: "post",
                    body: json,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };
                const response = await fetch(locationUrl, fetchConfig);
                if (response.ok) {
                    formTag.reset();
                    const newLocation = await response.json();
                    console.log(newLocation)
                }
            })

        } else {
            throw new Error('response not ok')
        }

    } catch (e) {
        console.error(e)
        // 'error:',
    }




})