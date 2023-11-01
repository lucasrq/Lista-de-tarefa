$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();

        const NovaTarefa = $('#adicionar-tarefa').val()
        const AddTarefa = $(`<li class = "box"></li>`).text(NovaTarefa)


        $(`<input type="checkbox">`).appendTo(AddTarefa)
        $(`${NovaTarefa}`).appendTo(AddTarefa)
        $(AddTarefa).appendTo('ul')
        console.log(NovaTarefa)
        $('#adicionar-tarefa').val(' ')
    })

    $('ul').on('change', '.box input[type="checkbox"]', function () {
        const checkbox = $(this);
        const tarefa = checkbox.parent();
        tarefa.css('text-decoration', 'line-through');
    });
})