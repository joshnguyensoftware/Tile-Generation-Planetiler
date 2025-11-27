# Tile Generation Planetiler

## 1: Data Generation

A typescript script to generate 250,000 features of synthetic GeoJSON data (Geofences, Trips, Stops) within New Zealand.

The current distribution ratio is 40% Geofences, 40% Trips and 20% Stops.

### Usage

1. **Install**
```bash
cd dataGeneration && npm install
```

2. **Run**
```bash
npx tsx main.ts
```

3. **Test**
```bash
npm test
```

### Configuration
Adjust `TOTAL_FEATURES` and distribution ratios in `dataGeneration/constants.ts`.

### Output
The script generates a file named `sampleData.geojson` at `dataGeneration/data`.
