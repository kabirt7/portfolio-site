## portfolio-site

## HOSTING 

https://stellular-cuchufli-a53c45.netlify.app/

## PROJECT UPDATE

- the Marquee effect is difficult to make responsive
- The overall styling and how it renders on phones is inconsistent
- I am going to re-make this in TSX. I think the component-based approach will be more consistent and easier to troubleshoot.

## DESIGN GOALS

- using a scroll snap vertical design. restrained use of color. I like a clean palette and the magenta is a bold color
- responsive and polished design 
- home, about, tech stack (in about), project, contact sections
- branch for each section

## KNOWN PROBLEMS

- Safari renders the marquee effect and spacing incorrectly. Phone VP also does this on Chrome. I think I'm going to scrap the marquee effect. Need to configure on phone/tablet VP.
- The About section height is way off for phones
- Styling for work page needs to be edited. A bit messy and not as clean as I want.
- Work page needs to be longer instead of the same size and overflow: scroll. This is making the navbar interract strangely

* SCSS for styling.
* B.E.M as a naming convention.
* Responsive

Should have the following section:

* A landing page/section with your name and title on it.
* An About page/section with a little bit about you
* A Tech stacks/skills page/section with all the techs you have learned during the course
* A Project page/section with all your projects 
* A Contact page/section with your email, GitHub profile link, LinkedIn profile link

## STRUGGLES

- Marquee was complex to make responsive
- Overall styling was difficult due to specific nature of my design

## PAGE BREAKDOWN/FEATURES

### navbar

- uses simple js and scroll snap to smoothly transition between pages

### home

- uses an infinite marquee effect 

### about

- Intro and a pic in a faux window
- tech stack featured here

### work

- flex box of articles with a landscape photo link and some text

### contact

- simple links and icons to socials, email etc

## LOG ##
10/03/24
- fixed about page styling - issues with spacing
- updated styling for contact page

13/03/24
- work page is now in new format. Styling needs finessing though
- contact page now connected to formspree and has updated styling
- about page styling is fixed
