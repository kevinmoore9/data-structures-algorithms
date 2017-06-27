$('p.classname') // selects paragraph with classname

$('p.first').animate({bottom: '200px'}, 200) // change bottom to 200px after 200 ms

$('p:gt(2)') // select all p w/ idx greater than 2

$('h2:has(span)') // selects h2 with span inside
$('h2:parent') // selects h2 with anything inside
$('h2:empty') // selects h2 with nothing inside

$('h2[name="lead"]') // selects h2 wth name == "lead" : can be any attr
$('a[href$=".co.uk"]') // selects links enidng with .co.uk

//ATTR METHOD
$('p:first').attr('src', 'newimg.jpg') // changes src to newimg.jpg


// CLASS METHODS
$('p:first').hasClass('lead') // return T or F
$('p:first').addClass('lead') // adds class 'lead'
$('p:first').removeClass('lead') // remove class 'lead'
$('p:first').toggleClass('lead') // toggles class 'lead'


$('p:first').text('new text')
$('p:first').html('new <em>text</em>')

// EVENT BINDING
$('p:first').bind('click', () => {
  $(this).toggleClass('blue');
});

$('p:first').click(() => {    // click, hover, keypress, etc
  $(this).toggleClass('blue');
});
