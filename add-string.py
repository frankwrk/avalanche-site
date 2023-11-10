import glob
import re

# Get a list of all HTML files in the directory
html_files = glob.glob('*.html')

# Define the string you want to add
string_to_add = '<link href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap" rel="stylesheet" />'

for file in html_files:
    with open(file, 'r', encoding='ISO-8859-1') as f:
        contents = f.read()

    # Insert your string before the </head> tag
    new_contents = re.sub('</head>', string_to_add + '</head>', contents)

    # Write the new contents back to the file
    with open(file, 'w', encoding='ISO-8859-1') as f:
        f.write(new_contents)