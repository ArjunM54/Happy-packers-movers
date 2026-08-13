from PIL import Image

def make_white_transparent(image_path):
    try:
        img = Image.open(image_path)
        img = img.convert("RGBA")
        data = img.getdata()

        new_data = []
        # Tolerance for "white" (240-255)
        threshold = 240
        for item in data:
            # Check if r, g, b are all above the threshold
            if item[0] > threshold and item[1] > threshold and item[2] > threshold:
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)

        img.putdata(new_data)
        img.save(image_path, "PNG")
        print("Successfully made background transparent!")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    make_white_transparent(r"client\public\logo-icon.png")
