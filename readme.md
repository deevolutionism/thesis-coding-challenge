# Thesis project challenge

## overview
This page relies heavily on flex box. While flex box is great
for handling responsiveness, it does have a few kinks which 
are aparent in this particular design.

### bugs
1. text scales with screen size
2. reducing the height of the browser window will push the main content up, hiding it beyond the window.
3. text is scaled down by the browser on mobile devices.

The root cause of these issues is likely because they are all children and rely on flex for positioning and layout.
solutions to the problems would require a few design changes that mainly affect the header and footer components.
Rather than the footer being a child of the main section content, it would need to be moved out and become a sibling. This way their position in the document would be based block-like and independant of flex positioning. flex would still be used to position items within the nav - but would not be necessary to position the nav itself.

changes
1. the hamburger has been removed from desktop size, but will show up on tablet / mobile screeens.
2. footer menu will appear in the mobile hambuger menu instead because the text will not fit on mobile otherwise.


outstanding
1. mobile performance considerations the 
2. add password view toggle

