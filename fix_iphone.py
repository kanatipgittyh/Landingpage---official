import re

with open('styles.css', 'r') as f:
    css = f.read()

# 1. Base .iphone-container
css = re.sub(
    r'\.iphone-container \{\s*position: relative;\s*width: 290px;\s*height: 580px;\s*margin: 0 auto;\s*perspective: 1000px;\s*\}',
    r'.iphone-container {\n  position: relative;\n  width: 270px;\n  aspect-ratio: 9 / 19.5;\n  height: auto;\n  margin: 0 auto;\n  perspective: 1000px;\n}',
    css
)

# 2. Base .iphone-frame
css = re.sub(
    r'\.iphone-frame \{\s*position: relative;\s*width: 100%;\s*height: 100%;\s*background: #000000;\s*border-radius: 46px;\s*padding: 10px;\s*box-shadow:[\s\S]*?border: 4px solid #2d2d30;\s*display: flex;\s*flex-direction: column;\s*overflow: hidden;\s*transition: transform 0\.4s cubic-bezier\(0\.16, 1, 0\.3, 1\);\s*\}',
    r'.iphone-frame {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: #000000;\n  border-radius: 40px;\n  padding: 6px;\n  box-shadow: \n    inset 0 0 3px 2px rgba(255, 255, 255, 0.2),\n    0 20px 40px rgba(0, 0, 0, 0.15);\n  border: 3px solid #2d2d30;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n}',
    css
)

# 3. Base .iphone-dynamic-island
css = re.sub(
    r'\.iphone-dynamic-island \{\s*position: absolute;\s*top: 18px;\s*left: 50%;\s*transform: translateX\(-50%\);\s*width: 85px;\s*height: 24px;\s*background: #000000;\s*border-radius: 12px;\s*z-index: 10;\s*box-shadow: inset 0 0 2px rgba\(255, 255, 255, 0\.15\);\s*\}',
    r'.iphone-dynamic-island {\n  position: absolute;\n  top: 14px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 76px;\n  height: 22px;\n  background: #000000;\n  border-radius: 12px;\n  z-index: 10;\n  box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.15);\n}',
    css
)

# 4. Base .iphone-screen
css = re.sub(
    r'\.iphone-screen \{\s*width: 100%;\s*height: 100%;\s*background: #111;\s*border-radius: 38px;\s*overflow: hidden;\s*position: relative;\s*border: 1px solid rgba\(255, 255, 255, 0\.05\);\s*\}',
    r'.iphone-screen {\n  width: 100%;\n  height: 100%;\n  background: #111;\n  border-radius: 34px;\n  overflow: hidden;\n  position: relative;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n}',
    css
)

# 4.1 Base .iphone-screen-image
css = re.sub(
    r'\.iphone-screen-image \{\s*width: 100%;\s*height: 100%;\s*object-fit: cover;\s*display: block;\s*\}',
    r'.iphone-screen-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  display: block;\n}',
    css
)

# 5. Base .floating-badge
css = re.sub(
    r'\.floating-badge \{\s*position: absolute;\s*top: -28px;\s*right: -36px;\s*z-index: 20;\s*width: 118px;\s*height: 118px;\s*background: var\(--primary\);\s*color: #FFFFFF;\s*border-radius: 50%;\s*display: flex;\s*flex-direction: column;\s*align-items: center;\s*justify-content: center;\s*text-align: center;\s*transform: rotate\(6deg\);\s*box-shadow: 0 10px 20px -5px rgba\(255, 94, 54, 0\.3\);\s*\}',
    r'.floating-badge {\n  position: absolute;\n  top: -18px;\n  right: -24px;\n  z-index: 20;\n  width: 95px;\n  height: 95px;\n  background: var(--primary);\n  color: #FFFFFF;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  transform: rotate(6deg);\n  padding: 8px;\n  box-shadow: 0 12px 24px -6px rgba(255, 94, 54, 0.4), 0 4px 12px rgba(0,0,0,0.1);\n}',
    css
)

with open('styles.css', 'w') as f:
    f.write(css)
print("Done")
