$(document).ready(function() {
    $('#all-notes').on('click', function(event) {
        const $card =
            $(event.target)
                .closest('.btn-edit')
                .is('.btn-edit') && $(event.target).closest('.note');
        if ($card) {
            jQuery.ajax({
                url: '/lists/' + $card.attr('id'),
                async: true,
                method: 'GET',
                dataType: 'json',
                success: function({ data }) {
                    $('#form-note').attr('data-id', $card.attr('id'));
                    $('#form-note .title').val(data.title);
                    $('#form-note .description').val(data.description);
                }
            });
        }
    });

    $('#modal-save').on('click', function(e) {
        jQuery.ajax({
            url: '/api/lists/' + $('#form-note').attr('data-id'),
            data: {
                title: $('#form-note .title').val(),
                description: $('#form-note .description').val()
            },
            async: true,
            method: 'PUT',
            dataType: 'json',
            success: function() {
                const id = $('#form-note').attr('data-id');
                $('#exampleModalScrollable').modal('hide');
                $('#' + id + ' .card-title').text($('#form-note .title').val());
                $('#' + id + ' .card-text').text(
                    $('#form-note .description').val()
                );
                $('#form-note').attr('data-id', '');
            },
            error() {
                $('#form-note').attr('data-id', '');
            }
        });
    });

    $('#create-note').on('click', function(e) {
        jQuery.ajax({
            url: '/api/lists',
            data: {
                title: $('#form-add [name="title"]').val(),
                description: $('#form-add [name="description"]').val()
            },
            method: 'POST',
            async: true,
            dataType: 'json',
            success: function(data) {
                const $note = $(`<div class="note col-3" id="${data.id}">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">${$(
                                        '#form-add [name="title"]'
                                    ).val()}</h5>
                                    <p class="card-text">${$(
                                        '#form-add [name="description"]'
                                    ).val()}</p>
                                    <div class="pt-3 d-flex justify-content-end"><a class="pl-4 btn-edit" data-toggle="modal" data-target=".modal-example"><i class="fas fa-pen"></i></a><a class="pl-4"><i class="far fa-image"></i></a><a class="pl-4"><i class="fas fa-palette"></i></a>
                                        <div class="pl-4 btn-delete"><i class="fas fa-times"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>`);
                $note.appendTo($('.block-note'));
                $('#form-add [name="title"]').val('');
                $('#form-add [name="description"]').val('');
            }
        });
    });
});
