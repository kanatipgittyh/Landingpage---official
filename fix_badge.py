import re

with open('styles.css', 'r') as f:
    css = f.read()

# 5. Base .floating-badge
css = re.sub(
    r'\.floating-badge \{\s*position: absolute;\s*top: -28px;\s*right: -36px;\s*z-index: 20;\s*width: 118px;\s*height: 118px;\s*background: var\(--primary\);\s*color: #FFFFFF;\s*border-radius: 50%;\s*display: flex;\s*align-items: center;\s*justify-content: center;\s*text-align: center;\s*padding: 10px;\s*box-shadow: 0 6px 16px rgba\(255, 94, 54, 0\.20\);\s*transform: rotate\(4deg\);\s*animation: floatBounce 4s ease-in-out infinite alternate;\s*-webkit-font-smoothing: antialiased;\s*-moz-osx-font-smoothing: grayscale;\s*\}',
    r'.floating-badge {\n  position: absolute;\n  top: -18px;\n  right: -24px;\n  z-index: 20;\n  width: 95px;\n  height: 95px;\n  background: var(--primary);\n  color: #FFFFFF;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 8px;\n  box-shadow: \n    0 12px 24px -6px rgba(255, 94, 54, 0.4), \n    0 4px 12px rgba(0,0,0,0.1);\n  transform: rotate(6deg);\n  animation: floatBounce 4s ease-in-out infinite alternate;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}',
    css
)

with open('styles.css', 'w') as f:
    f.write(css)
print("Done")
