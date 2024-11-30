from captcha.image import ImageCaptcha 

image = ImageCaptcha(width=2000, height=760, font_sizes=[220])

data = image.generate('ZBS580MO')
print(type(data.getvalue()))
image.write('ZBS580MO', 'tests/out.png')
