
# LinkedIn Post Generator

Update the contents in the `user_input.json` with an object of the form 
```json
{
    "title": "How to post on linkedin daily?",
    "pages": [
        {
            "heading": "Setup this repo locally",
            "description": "Download this repo and run `npm install`."
        },{
            "heading": "Fill the template",
            "description": "Update the user_input.json to add your content. Remember to select the background color as well."
        },{
            "heading": "Abra-ca-dabra",
            "description": "Run `npm start` to generate pdf and post content. You can find it under the `output > <current_date>`."
        },{
            "heading": "And all set",
            "description": "Verify the pdf and the content before posting. Add a couple of hashtags yourself as well."
        }
    ],
    "cta": "Follow for more such content"
}
```


## Demo

Some linkedin posts generated using this are
- [5 Hacks to Boost Your Productivity](https://www.linkedin.com/posts/activity-7225755801645150208-N2JF?utm_source=share&utm_medium=member_desktop)
- [How to upskill yourself?](https://www.linkedin.com/posts/activity-7225006601512869888-zZyO?utm_source=share&utm_medium=member_desktop)
- [7 things TO-DO for your next Dream Job](https://www.linkedin.com/posts/activity-7224103481127620609-W_Mx?utm_source=share&utm_medium=member_desktop)


## Documentation

Size of each page is 1000x1000.  
The padding area is 50px.  
The page numbers are placed at a padding of 100px.  
Fonts used are:  
- satisfy(32 | 64)  
- roboto(32 | 64)  
- roboto_black(32 | 64 | 100)  
- bebas(32 | 64 | 100)

#### Rules for formating
- Add `\n` in the `title` and `cta` to break line.
- The `heading` and `description` for the pages have word-wrap, so no need to add a breakline.
- In `description` a `. `(fullstop and space) is used to breakline as well. This helps in having multiple points.


## Background Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| aliceblue | ![#f0f8ff](https://via.placeholder.com/10/f0f8ff?text=+) #f0f8ff |
| antiquewhite | ![#faebd7](https://via.placeholder.com/10/faebd7?text=+) #faebd7 |
| aqua | ![#00ffff](https://via.placeholder.com/10/00ffff?text=+) #00ffff |
| aquamarine | ![#7fffd4](https://via.placeholder.com/10/7fffd4?text=+) #7fffd4 |
| azure | ![#f0ffff](https://via.placeholder.com/10/f0ffff?text=+) #f0ffff |
| beige | ![#f5f5dc](https://via.placeholder.com/10/f5f5dc?text=+) #f5f5dc |
| bisque | ![#ffe4c4](https://via.placeholder.com/10/ffe4c4?text=+) #ffe4c4 |
| black | ![#000000](https://via.placeholder.com/10/000000?text=+) #000000 |
| blanchedalmond | ![#ffebcd](https://via.placeholder.com/10/ffebcd?text=+) #ffebcd |
| blue | ![#0000ff](https://via.placeholder.com/10/0000ff?text=+) #0000ff |
| blueviolet | ![#8a2be2](https://via.placeholder.com/10/8a2be2?text=+) #8a2be2 |
| brown | ![#a52a2a](https://via.placeholder.com/10/a52a2a?text=+) #a52a2a |
| burlywood | ![#deb887](https://via.placeholder.com/10/deb887?text=+) #deb887 |
| cadetblue | ![#5f9ea0](https://via.placeholder.com/10/5f9ea0?text=+) #5f9ea0 |
| chartreuse | ![#7fff00](https://via.placeholder.com/10/7fff00?text=+) #7fff00 |
| chocolate | ![#d2691e](https://via.placeholder.com/10/d2691e?text=+) #d2691e |
| coral | ![#ff7f50](https://via.placeholder.com/10/ff7f50?text=+) #ff7f50 |
| cornflowerblue | ![#6495ed](https://via.placeholder.com/10/6495ed?text=+) #6495ed |
| cornsilk | ![#fff8dc](https://via.placeholder.com/10/fff8dc?text=+) #fff8dc |
| crimson | ![#dc143c](https://via.placeholder.com/10/dc143c?text=+) #dc143c |
| cyan | ![#00ffff](https://via.placeholder.com/10/00ffff?text=+) #00ffff |
| darkblue | ![#00008b](https://via.placeholder.com/10/00008b?text=+) #00008b |
| darkcyan | ![#008b8b](https://via.placeholder.com/10/008b8b?text=+) #008b8b |
| darkgoldenrod | ![#b8860b](https://via.placeholder.com/10/b8860b?text=+) #b8860b |
| darkgray | ![#a9a9a9](https://via.placeholder.com/10/a9a9a9?text=+) #a9a9a9 |
| darkgreen | ![#006400](https://via.placeholder.com/10/006400?text=+) #006400 |
| darkkhaki | ![#bdb76b](https://via.placeholder.com/10/bdb76b?text=+) #bdb76b |
| darkmagenta | ![#8b008b](https://via.placeholder.com/10/8b008b?text=+) #8b008b |
| darkolivegreen | ![#556b2f](https://via.placeholder.com/10/556b2f?text=+) #556b2f |
| darkorange | ![#ff8c00](https://via.placeholder.com/10/ff8c00?text=+) #ff8c00 |
| darkorchid | ![#9932cc](https://via.placeholder.com/10/9932cc?text=+) #9932cc |
| darkred | ![#8b0000](https://via.placeholder.com/10/8b0000?text=+) #8b0000 |
| darksalmon | ![#e9967a](https://via.placeholder.com/10/e9967a?text=+) #e9967a |
| darkseagreen | ![#8fbc8f](https://via.placeholder.com/10/8fbc8f?text=+) #8fbc8f |
| darkslateblue | ![#483d8b](https://via.placeholder.com/10/483d8b?text=+) #483d8b |
| darkslategray | ![#2f4f4f](https://via.placeholder.com/10/2f4f4f?text=+) #2f4f4f |
| darkturquoise | ![#00ced1](https://via.placeholder.com/10/00ced1?text=+) #00ced1 |
| darkviolet | ![#9400d3](https://via.placeholder.com/10/9400d3?text=+) #9400d3 |
| deeppink | ![#ff1493](https://via.placeholder.com/10/ff1493?text=+) #ff1493 |
| deepskyblue | ![#00bfff](https://via.placeholder.com/10/00bfff?text=+) #00bfff |
| dimgray | ![#696969](https://via.placeholder.com/10/696969?text=+) #696969 |
| dodgerblue | ![#1e90ff](https://via.placeholder.com/10/1e90ff?text=+) #1e90ff |
| feldspar | ![#d19275](https://via.placeholder.com/10/d19275?text=+) #d19275 |
| firebrick | ![#b22222](https://via.placeholder.com/10/b22222?text=+) #b22222 |
| floralwhite | ![#fffaf0](https://via.placeholder.com/10/fffaf0?text=+) #fffaf0 |
| forestgreen | ![#228b22](https://via.placeholder.com/10/228b22?text=+) #228b22 |
| fuchsia | ![#ff00ff](https://via.placeholder.com/10/ff00ff?text=+) #ff00ff |
| gainsboro | ![#dcdcdc](https://via.placeholder.com/10/dcdcdc?text=+) #dcdcdc |
| ghostwhite | ![#f8f8ff](https://via.placeholder.com/10/f8f8ff?text=+) #f8f8ff |
| gold | ![#ffd700](https://via.placeholder.com/10/ffd700?text=+) #ffd700 |
| goldenrod | ![#daa520](https://via.placeholder.com/10/daa520?text=+) #daa520 |
| gray | ![#808080](https://via.placeholder.com/10/808080?text=+) #808080 |
| green | ![#008000](https://via.placeholder.com/10/008000?text=+) #008000 |
| greenyellow | ![#adff2f](https://via.placeholder.com/10/adff2f?text=+) #adff2f |
| honeydew | ![#f0fff0](https://via.placeholder.com/10/f0fff0?text=+) #f0fff0 |
| hotpink | ![#ff69b4](https://via.placeholder.com/10/ff69b4?text=+) #ff69b4 |
| indianred  | ![#cd5c5c](https://via.placeholder.com/10/cd5c5c?text=+) #cd5c5c |
| indigo  | ![#4b0082](https://via.placeholder.com/10/4b0082?text=+) #4b0082 |
| ivory | ![#fffff0](https://via.placeholder.com/10/fffff0?text=+) #fffff0 |
| khaki | ![#f0e68c](https://via.placeholder.com/10/f0e68c?text=+) #f0e68c |
| lavender | ![#e6e6fa](https://via.placeholder.com/10/e6e6fa?text=+) #e6e6fa |
| lavenderblush | ![#fff0f5](https://via.placeholder.com/10/fff0f5?text=+) #fff0f5 |
| lawngreen | ![#7cfc00](https://via.placeholder.com/10/7cfc00?text=+) #7cfc00 |
| lemonchiffon | ![#fffacd](https://via.placeholder.com/10/fffacd?text=+) #fffacd |
| lightblue | ![#add8e6](https://via.placeholder.com/10/add8e6?text=+) #add8e6 |
| lightcoral | ![#f08080](https://via.placeholder.com/10/f08080?text=+) #f08080 |
| lightcyan | ![#e0ffff](https://via.placeholder.com/10/e0ffff?text=+) #e0ffff |
| lightgoldenrodyellow | ![#fafad2](https://via.placeholder.com/10/fafad2?text=+) #fafad2 |
| lightgrey | ![#d3d3d3](https://via.placeholder.com/10/d3d3d3?text=+) #d3d3d3 |
| lightgreen | ![#90ee90](https://via.placeholder.com/10/90ee90?text=+) #90ee90 |
| lightpink | ![#ffb6c1](https://via.placeholder.com/10/ffb6c1?text=+) #ffb6c1 |
| lightsalmon | ![#ffa07a](https://via.placeholder.com/10/ffa07a?text=+) #ffa07a |
| lightseagreen | ![#20b2aa](https://via.placeholder.com/10/20b2aa?text=+) #20b2aa |
| lightskyblue | ![#87cefa](https://via.placeholder.com/10/87cefa?text=+) #87cefa |
| lightslateblue | ![#8470ff](https://via.placeholder.com/10/8470ff?text=+) #8470ff |
| lightslategray | ![#778899](https://via.placeholder.com/10/778899?text=+) #778899 |
| lightsteelblue | ![#b0c4de](https://via.placeholder.com/10/b0c4de?text=+) #b0c4de |
| lightyellow | ![#ffffe0](https://via.placeholder.com/10/ffffe0?text=+) #ffffe0 |
| lime | ![#00ff00](https://via.placeholder.com/10/00ff00?text=+) #00ff00 |
| limegreen | ![#32cd32](https://via.placeholder.com/10/32cd32?text=+) #32cd32 |
| linen | ![#faf0e6](https://via.placeholder.com/10/faf0e6?text=+) #faf0e6 |
| magenta | ![#ff00ff](https://via.placeholder.com/10/ff00ff?text=+) #ff00ff |
| maroon | ![#800000](https://via.placeholder.com/10/800000?text=+) #800000 |
| mediumaquamarine | ![#66cdaa](https://via.placeholder.com/10/66cdaa?text=+) #66cdaa |
| mediumblue | ![#0000cd](https://via.placeholder.com/10/0000cd?text=+) #0000cd |
| mediumorchid | ![#ba55d3](https://via.placeholder.com/10/ba55d3?text=+) #ba55d3 |
| mediumpurple | ![#9370d8](https://via.placeholder.com/10/9370d8?text=+) #9370d8 |
| mediumseagreen | ![#3cb371](https://via.placeholder.com/10/3cb371?text=+) #3cb371 |
| mediumslateblue | ![#7b68ee](https://via.placeholder.com/10/7b68ee?text=+) #7b68ee |
| mediumspringgreen | ![#00fa9a](https://via.placeholder.com/10/00fa9a?text=+) #00fa9a |
| mediumturquoise | ![#48d1cc](https://via.placeholder.com/10/48d1cc?text=+) #48d1cc |
| mediumvioletred | ![#c71585](https://via.placeholder.com/10/c71585?text=+) #c71585 |
| midnightblue | ![#191970](https://via.placeholder.com/10/191970?text=+) #191970 |
| mintcream | ![#f5fffa](https://via.placeholder.com/10/f5fffa?text=+) #f5fffa |
| mistyrose | ![#ffe4e1](https://via.placeholder.com/10/ffe4e1?text=+) #ffe4e1 |
| moccasin | ![#ffe4b5](https://via.placeholder.com/10/ffe4b5?text=+) #ffe4b5 |
| navajowhite | ![#ffdead](https://via.placeholder.com/10/ffdead?text=+) #ffdead |
| navy | ![#000080](https://via.placeholder.com/10/000080?text=+) #000080 |
| oldlace | ![#fdf5e6](https://via.placeholder.com/10/fdf5e6?text=+) #fdf5e6 |
| olive | ![#808000](https://via.placeholder.com/10/808000?text=+) #808000 |
| olivedrab | ![#6b8e23](https://via.placeholder.com/10/6b8e23?text=+) #6b8e23 |
| orange | ![#ffa500](https://via.placeholder.com/10/ffa500?text=+) #ffa500 |
| orangered | ![#ff4500](https://via.placeholder.com/10/ff4500?text=+) #ff4500 |
| orchid | ![#da70d6](https://via.placeholder.com/10/da70d6?text=+) #da70d6 |
| palegoldenrod | ![#eee8aa](https://via.placeholder.com/10/eee8aa?text=+) #eee8aa |
| palegreen | ![#98fb98](https://via.placeholder.com/10/98fb98?text=+) #98fb98 |
| paleturquoise | ![#afeeee](https://via.placeholder.com/10/afeeee?text=+) #afeeee |
| palevioletred | ![#d87093](https://via.placeholder.com/10/d87093?text=+) #d87093 |
| papayawhip | ![#ffefd5](https://via.placeholder.com/10/ffefd5?text=+) #ffefd5 |
| peachpuff | ![#ffdab9](https://via.placeholder.com/10/ffdab9?text=+) #ffdab9 |
| peru | ![#cd853f](https://via.placeholder.com/10/cd853f?text=+) #cd853f |
| pink | ![#ffc0cb](https://via.placeholder.com/10/ffc0cb?text=+) #ffc0cb |
| plum | ![#dda0dd](https://via.placeholder.com/10/dda0dd?text=+) #dda0dd |
| powderblue | ![#b0e0e6](https://via.placeholder.com/10/b0e0e6?text=+) #b0e0e6 |
| purple | ![#800080](https://via.placeholder.com/10/800080?text=+) #800080 |
| red | ![#ff0000](https://via.placeholder.com/10/ff0000?text=+) #ff0000 |
| rosybrown | ![#bc8f8f](https://via.placeholder.com/10/bc8f8f?text=+) #bc8f8f |
| royalblue | ![#4169e1](https://via.placeholder.com/10/4169e1?text=+) #4169e1 |
| saddlebrown | ![#8b4513](https://via.placeholder.com/10/8b4513?text=+) #8b4513 |
| salmon | ![#fa8072](https://via.placeholder.com/10/fa8072?text=+) #fa8072 |
| sandybrown | ![#f4a460](https://via.placeholder.com/10/f4a460?text=+) #f4a460 |
| seagreen | ![#2e8b57](https://via.placeholder.com/10/2e8b57?text=+) #2e8b57 |
| seashell | ![#fff5ee](https://via.placeholder.com/10/fff5ee?text=+) #fff5ee |
| sienna | ![#a0522d](https://via.placeholder.com/10/a0522d?text=+) #a0522d |
| silver | ![#c0c0c0](https://via.placeholder.com/10/c0c0c0?text=+) #c0c0c0 |
| skyblue | ![#87ceeb](https://via.placeholder.com/10/87ceeb?text=+) #87ceeb |
| slateblue | ![#6a5acd](https://via.placeholder.com/10/6a5acd?text=+) #6a5acd |
| slategray | ![#708090](https://via.placeholder.com/10/708090?text=+) #708090 |
| snow | ![#fffafa](https://via.placeholder.com/10/fffafa?text=+) #fffafa |
| springgreen | ![#00ff7f](https://via.placeholder.com/10/00ff7f?text=+) #00ff7f |
| steelblue | ![#4682b4](https://via.placeholder.com/10/4682b4?text=+) #4682b4 |
| tan | ![#d2b48c](https://via.placeholder.com/10/d2b48c?text=+) #d2b48c |
| teal | ![#008080](https://via.placeholder.com/10/008080?text=+) #008080 |
| thistle | ![#d8bfd8](https://via.placeholder.com/10/d8bfd8?text=+) #d8bfd8 |
| tomato | ![#ff6347](https://via.placeholder.com/10/ff6347?text=+) #ff6347 |
| turquoise | ![#40e0d0](https://via.placeholder.com/10/40e0d0?text=+) #40e0d0 |
| violet | ![#ee82ee](https://via.placeholder.com/10/ee82ee?text=+) #ee82ee |
| violetred | ![#d02090](https://via.placeholder.com/10/d02090?text=+) #d02090 |
| wheat | ![#f5deb3](https://via.placeholder.com/10/f5deb3?text=+) #f5deb3 |
| white | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #ffffff |
| whitesmoke | ![#f5f5f5](https://via.placeholder.com/10/f5f5f5?text=+) #f5f5f5 |
| yellow | ![#ffff00](https://via.placeholder.com/10/ffff00?text=+) #ffff00 |
| yellowgreen | ![#9acd32](https://via.placeholder.com/10/9acd32?text=+) #9acd32 |


## Acknowledgements

 - [One up app](https://www.oneupapp.io/linkedin-hashtag-generator): used to generate hashtags for the linkedin post.
 - [Awesome Readme Templates](https://readme.so/editor): used to create this readme.


## Authors

- [@anmol5varma](https://www.github.com/anmol5varma)


## Tech stack

![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge&logo=MIT&logoColor=%23F7DF1E)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![JIMP](https://img.shields.io/badge/JIMP-%23ED1C24.svg?style=for-the-badge&logo=jimp&logoColor=white)
![puppeteer](https://img.shields.io/badge/puppeteer-%23006f5c.svg?style=for-the-badge&logo=puppeteer&logoColor=white)
![pdfkit](https://img.shields.io/badge/pdfkit-%23f1413d.svg?style=for-the-badge&logo=pdfkit&logoColor=white) 
![colorjs](https://img.shields.io/badge/colorjs-%232C3454.svg?style=for-the-badge&logo=colorjs&logoColor=white)
