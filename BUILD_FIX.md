---
created: 2025-10-04
updated: 2026-01-31
---
# Digital Garden Template - Build Fix

## Problem

Entity notes from subfolders (entities/drug/, entities/condition/, etc.) were not appearing in the built Digital Garden site.

## Root Cause

**Windows file locking issue** with the `eleventy-plugin-gen-favicons` plugin. The plugin was attempting to copy `favicon.svg` but encountering a file lock error:

```
EBUSY: resource busy or locked, copyfile
'D:\...\src\site\favicon.svg' -> 'D:\...\dist\favicon.svg'
```

This error **prevented the entire build from completing**, so entity notes were never generated.

## Solution Applied

### 1. Disabled Favicon Plugin

**File:** `.eleventy.js` (line 527-528)

```javascript
// Favicon plugin disabled temporarily due to Windows file locking issues
// eleventyConfig.addPlugin(faviconsPlugin, { outputDir: "dist" });
```

### 2. Updated Template to Use Simple Favicon Link

**File:** `src/site/_includes/components/pageheader.njk` (line 31-33)

```html
{# Favicon plugin disabled temporarily due to Windows file locking issues #}
{# % favicons './src/site/favicon.svg', appleIconBgColor='#123' % #}
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
```

### 3. Manual Favicon Passthrough

The favicon is now handled by Eleventy's passthrough copy (already configured in `.eleventy.js`):

```javascript
eleventyConfig.addPassthroughCopy("src/site/img");
```

## Build Results

✅ **Build now completes successfully:**
- **23 files written** in 1.19 seconds
- All entity notes generated correctly
- Proper permalink structure maintained

### Generated Entity Pages:

```
dist/
├── entities/
│   ├── cellularcomponent/
│   │   └── mitochondria/index.html
│   ├── condition/
│   │   ├── chronic-inflammation/index.html
│   │   └── diabetes/index.html
│   ├── drug/
│   │   ├── ashwagandha/index.html
│   │   ├── coenzyme-q10/index.html
│   │   ├── creatine/index.html
│   │   ├── mct-8-oil/index.html
│   │   └── turmeric/index.html
│   ├── intervention/
│   │   ├── keto-diet/index.html
│   │   └── red-light-therapy/index.html
│   └── users/
│       └── john-doe/
│           ├── health-goals/index.html
│           ├── lab-results-2025-05-01/index.html
│           ├── supplement-regimen/index.html
│           └── user-health-profile/index.html
└── notes/
    └── lab-tests/
        └── ...
```

## Why Entity Notes Use `/entities/` Path (Not `/notes/entities/`)

The entity notes have custom permalinks defined in their frontmatter:

```yaml
---
{"dg-publish":true,"permalink":"/entities/drug/ashwagandha/","tags":["herb","adaptogen"]}
---
```

This is **intentional** - it provides cleaner URLs and separates entity pages from regular note pages.

## How to Rebuild

```bash
cd "D:\NAS\Qsync\quartz_fork\content\GitHub_nas_filter\MKG_top\digitalgarden_template"

# Clean and rebuild
npm run prebuild
npm run build:eleventy

# Or use the full build (includes Sass)
npm run build
```

## Verification

To verify all entity notes are built:

```bash
# Count HTML pages
find dist -name "index.html" | wc -l
# Should show 19+ pages

# List entity directories
ls -R dist/entities/

# Check specific entity
cat dist/entities/drug/ashwagandha/index.html | head -20
```

## Future Improvements

### Option 1: Fix Favicon Plugin (Recommended)

Investigate alternative favicon plugins that work better on Windows:
- `@quasibit/eleventy-plugin-sitemap`
- Custom favicon generation script
- Use Vercel/Netlify build environment (Linux - no file locking issues)

### Option 2: Keep Current Solution

The simple `<link rel="icon">` tag works perfectly for most browsers. The favicon plugin was generating multiple sizes/formats, but this is not essential.

## Related Files Modified

1. `.eleventy.js` - Disabled favicon plugin
2. `src/site/_includes/components/pageheader.njk` - Updated favicon reference
3. This BUILD_FIX.md - Documentation

## Testing Checklist

- [x] Build completes without errors
- [x] All entity subfolders are included
- [x] Permalinks are correct
- [x] HTML pages are valid
- [x] Favicon displays in browser
- [ ] Deploy to Vercel/Netlify (test in production)
- [ ] Verify all internal links work
- [ ] Check graph visualization includes entities

## Notes

- This fix is **Windows-specific**. The favicon plugin likely works fine on Linux/macOS
- All entity notes have `dg-publish: true` in JSON frontmatter format (valid in Obsidian)
- The DG Auto Publish plugin can add `dg-publish: true` to notes that don't have it

## See Also

- [DG Auto Publish Plugin](../MKG_plugins/dg-auto-publish/README.md) - Bulk add dg-publish frontmatter
- [Digital Garden Compatibility](../MKG_plugins/digitalgarden/COMPATIBILITY.md) - Repository setup verification
