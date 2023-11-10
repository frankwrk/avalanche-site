import os
import glob

# Get a list of all HTML files in current directory
html_files = glob.glob('*.html')

for html_file in html_files:
    with open(html_file, 'r', encoding='ISO-8859-1') as file:
        filedata = file.read()

    # Replace the target string
    filedata = filedata.replace('fancybox_overlay.png', 'fancybox_overlay.svg')
    filedata = filedata.replace('fancybox_sprite.png', 'fancybox_sprite.svg')
    filedata = filedata.replace('fancybox_sprite@2x.png', 'fancybox_sprite.svg')

    # Write the file out again
    with open(html_file, 'w', encoding='ISO-8859-1') as file:
        file.write(filedata)
