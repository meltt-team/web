import qrcode
import qrcode.image.svg as svg

url = "https://meltt.app/es?utm_campaign=qr_es_5"

factory = svg.SvgPathImage  # crisp paths; also try SvgImage or SvgFragmentImage
img = qrcode.make(
    url,
    image_factory=factory,
    box_size=10,   # scales the SVG modules
    border=4       # quiet zone (in modules)
)
img.save("es_qr_5.svg")
print("qr_es_5.svg")
