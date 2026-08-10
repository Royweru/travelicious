import json
import urllib.request
import urllib.error
from pathlib import Path

def download_html(download_url, output_path):
    print(f"Fetching: {download_url}")
    req = urllib.request.Request(download_url)
    try:
        response = urllib.request.urlopen(req)
        html = response.read().decode('utf-8')
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(html)
        print(f"Saved HTML to {output_path}")
    except Exception as e:
        print(f"Error fetching {download_url}: {e}")

def main():
    json_dir = Path(r"C:\Users\Admin\.gemini\antigravity\brain\720be31b-37aa-4eb3-a20c-ed6144ca1188\scratch\stitch_downloads")
    
    for json_file in json_dir.glob("*.json"):
        with open(json_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        if "htmlCode" in data and "downloadUrl" in data["htmlCode"]:
            url = data["htmlCode"]["downloadUrl"]
            html_file = json_dir / f"{json_file.stem}.html"
            download_html(url, html_file)
        else:
            print(f"No htmlCode.downloadUrl found in {json_file.name}")

if __name__ == "__main__":
    main()
