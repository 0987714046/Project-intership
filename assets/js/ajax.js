    $.ajax({
        type: "GET",
        url: "https://61cc05a6198df60017aebe26.mockapi.io/api/Netflix",
        success: function(dataMoviesSmall) {
            renderMoviesSmall(dataMoviesSmall)
        },
    });


    function renderMoviesSmall(Netflix) {
        var html = Netflix.map(Netflix => {
            return `<img src="${Netflix.image}" class="row_poster">
        
        `
        })
        const row_posters = document.querySelectorAll('.row_postersSmall')
        for (const row_poster of row_posters) {
            row_poster.innerHTML = html.join('\n');
        }

    }