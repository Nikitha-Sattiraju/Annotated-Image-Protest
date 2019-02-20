$("body").on("click", ".square", function (e) {
	// on click add an active class to the dot that was clicked
	e.preventDefault();

	const $this_square = $(this);

	$this_square.addClass("active");
});

$("body").on("click", ".square .close", function (e) {
	// on click add an active class to the dot that was clicked
	e.preventDefault();
	e.stopPropagation();

	const $this_close = $(this);
	const $this_square = $this_close.closest(".square");

	$this_square.removeClass("active");
});