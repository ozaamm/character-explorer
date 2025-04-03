## Marvel Rivals Character Explorer

Next.js 15 web app that displays Marvel Rivals characters.

## What I did

Instead of using the sample data, I created my own characters.json file with the help of Rivalskins database.

I went with a grid layout for the front page because I prefer the look of it. Each character card shows their thumbnail, name, role and clicking the card takes you to a dynamic character page, which shows more detailed info and a full body image of the character.

## Completed Bonus Tasks:
- Added search, role and sort by filters on the front page grid
- Implemented static rendering for dynamic character pages
- Created loading state for dynamic character pages (although I went with a very simplified version in the end)
- Created a custom image component which uses loader spinners and made front page grid & character page images use the same component 
- Built a responsive layout that works on mobile, tablet and desktop
- Added some error handling

## Challenges I ran into

- There was a bit of a learning curve with dynamic pages and optimizing images, but managed to figure them out.
- Ran into some npm build issues specific to Next.js 15 that were frustrating to debug. AI wasnt really helpful with these at all, but was able to figure out the problems by checking public forums and next.js documentation.

## What I learned

This was a really fun little project to work on especially with Marvel data! Coming from working mostly on older technologies like PHP, working with Next.js felt so modern and cool. I really enjoyed learning about it!

## With more time I would:
- Clean up and centralize some of the CSS, and maybe learn more about tailwind. 
- Improve UI elements and overall responsiveness between screen sizes, although I did focus on this quite a bit but didnt spend the time to make it "perfect".