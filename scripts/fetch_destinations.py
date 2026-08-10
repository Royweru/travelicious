import json
import os
import urllib.request
import urllib.error
from pathlib import Path

def get_api_key():
    return "AQ.Ab8RN6LhmkF7JUAbz9cDauIPK6Hd2VZOVDcVbDAil5eoFkvXQw"

def fetch_stitch_metadata(project_id, component_id, api_key):
    url = f"https://stitch.googleapis.com/v1/projects/{project_id}/screens/{component_id}"
    
    headers = {
        'User-Agent': 'Mozilla/5.0',
        'X-Goog-Api-Key': api_key
    }
    
    print(f"Attempting to fetch from: {url}")
    req = urllib.request.Request(url, headers=headers)
    try:
        response = urllib.request.urlopen(req)
        data = response.read().decode('utf-8')
        print(f"Success fetching metadata for {component_id}!")
        return json.loads(data)
    except urllib.error.HTTPError as e:
        print(f"HTTP Error {e.code}: {e.reason} for {url}")
    except Exception as e:
        print(f"Error fetching from {url}: {e}")
    
    return None

def fetch_html(download_url):
    print(f"Attempting to fetch HTML from: {download_url}")
    req = urllib.request.Request(download_url)
    try:
        response = urllib.request.urlopen(req)
        data = response.read().decode('utf-8')
        print(f"Success fetching HTML!")
        return data
    except urllib.error.HTTPError as e:
        print(f"HTTP Error {e.code}: {e.reason} for {download_url}")
    except Exception as e:
        print(f"Error fetching from {download_url}: {e}")
    
    return None

def main():
    api_key = get_api_key()
    project_id = "2905719177282000882"
    screens = [
        "99a44bdabb044285aef4b52c70ab8862",
        "e55d20cae8a84da08e346f59a170f392",
        "9b21e7b027054d4bb40c6274396ec6bd",
        "bafd1a87708c446eafc116594679f8e7",
        "b30013ad529742aa887446e78f8dd76f"
    ]
    
    output_dir = Path(r"C:\Users\Admin\.gemini\antigravity\brain\720be31b-37aa-4eb3-a20c-ed6144ca1188\scratch\stitch_downloads")
    output_dir.mkdir(parents=True, exist_ok=True)
    
    for screen_id in screens:
        print(f"\nFetching {screen_id}...")
        meta = fetch_stitch_metadata(project_id, screen_id, api_key)
        if meta and 'htmlCode' in meta and 'downloadUrl' in meta['htmlCode']:
            download_url = meta['htmlCode']['downloadUrl']
            html_data = fetch_html(download_url)
            if html_data:
                out_file = output_dir / f"{screen_id}.html"
                with open(out_file, 'w', encoding='utf-8') as f:
                    f.write(html_data)
                print(f"Saved to {out_file}")
            else:
                print(f"Failed to fetch HTML for {screen_id}")
        else:
            print(f"Failed to fetch metadata or missing htmlCode for {screen_id}")

if __name__ == "__main__":
    main()
