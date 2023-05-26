window.addEventListener('DOMContentLoaded', async () => {

    const fetchUrl = 'http://localhost:8000/api/locations/'
    try {
        const response = await fetch(fetchUrl)

        if (response.ok) {
            const data = await response.json()
            const selectTag = document.getElementById('location')
            for (let i  of data.locations) {
                let option = document.createElement('option')
                option.value = i.id
                option.innerHTML = i.name
                selectTag.appendChild(option)
            }

            const formTag = document.getElementById('create-conference-form');
            formTag.addEventListener('submit', async event => {
                event.preventDefault()

                const formData = new FormData(formTag)
                const json = JSON.stringify(Object.fromEntries(formData))

                const conferenceUrl = 'http://localhost:8000/api/conferences/';
                const fetchConfig = {
                    method: "post",
                    body: json,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };
                const response = await fetch(conferenceUrl, fetchConfig);
                if (response.ok) {
                    formTag.reset();
                    const newConference = await response.json();
                    console.log(newConference)
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