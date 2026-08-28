import re

css = open('styles.css').read()
# Find all @media (max-width: 768px) blocks
matches = re.finditer(r'@media \(max-width: 768px\) \{([\s\S]*?)\n\}', css)
for i, match in enumerate(matches):
    print(f"--- Block {i} ---")
    print(match.group(1))

