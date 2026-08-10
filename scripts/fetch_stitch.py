import json
import os
import urllib.request
import urllib.error
from pathlib import Path

def get_api_key():
    return "AQ.Ab8RN6KHM_hQBqd2hu2mAxR4TgsrmDNZ73a_Cu9F8JhoGXlTXA"

def fetch_stitch_component(project_id, component_id, api_key):
    # Try the main UI builder endpoints that Stitch uses
    urls = [
        f"https://us-central1-ui-builder-418512.cloudfunctions.net/project-data/{project_id}/components/{component_id}",
        f"https://api.stitching.dev/v1/projects/{project_id}/components/{component_id}",
        f"https://storage.googleapis.com/stitch-artifacts/projects/{project_id}/components/{component_id}.json"
    ]
    
    headers = {
        'User-Agent': 'Mozilla/5.0',
        'Authorization': f'Bearer {api_key}',
        'x-api-key': api_key
    }
    
    for url in urls:
        print(f"Attempting to fetch from: {url}")
        req = urllib.request.Request(url, headers=headers)
        try:
            response = urllib.request.urlopen(req)
            data = response.read().decode('utf-8')
            print(f"Success fetching {component_id}!")
            return data
        except urllib.error.HTTPError as e:
            print(f"HTTP Error {e.code}: {e.reason} for {url}")
        except Exception as e:
            print(f"Error fetching from {url}: {e}")
    
    return None

def main():
    api_key = get_api_key()
    if not api_key:
        print("Could not find STITCH_API_KEY in mcp_config.json")
        return

    project_id = "2905719177282000882"
    screens = [
        "99a44bdabb044285aef4b52c70ab8862", # Adventures - Wildlife Gallery & Featured Lion Story
        "e55d20cae8a84da08e346f59a170f392", # Adventures - Experience Stories Editorial Grid
        "9b21e7b027054d4bb40c6274396ec6bd", # Adventures - Experience Stories Editorial Grid Expansion
        "bafd1a87708c446eafc116594679f8e7", # Adventures - When to See What Interactive Calendar
        "b30013ad529742aa887446e78f8dd76f"  # African Lion - The Pride of the Savannah
    ]
    
    output_dir = Path(r"C:\Users\Admin\.gemini\antigravity\brain\720be31b-37aa-4eb3-a20c-ed6144ca1188\scratch\stitch_downloads")
    output_dir.mkdir(parents=True, exist_ok=True)
    
    for screen_id in screens:
        print(f"\nFetching {screen_id}...")
        data = fetch_stitch_component(project_id, screen_id, api_key)
        if data:
            out_file = output_dir / f"{screen_id}.json"
            with open(out_file, 'w') as f:
                f.write(data)
            print(f"Saved to {out_file}")
        else:
            print(f"Failed to fetch {screen_id} from all known endpoints.")

if __name__ == "__main__":
    main()
