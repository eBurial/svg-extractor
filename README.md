# 🎨 SVG Extractor

<p align="center">
  <img src="images/readme-logo.png" alt="SVG Extractor Logo" width="512" height="512">
</p>

<p align="center">
Hi, i'm sam! This is just a simple personal project, i created it to learn how to create chrome extensions.
</p>

<p align="center">
<strong>🔍 Extract and download SVG images from any webpage with one click!</strong>
</p>

---

## ✨ Features

- **🚀 One-Click Extraction** - Extract all SVG elements from any webpage instantly
- **⬇️ Individual Downloads** - Download each SVG as a separate file with a single click
- **🎯 Smart Detection** - Automatically finds all SVG elements on the current page
- **🖼️ Visual Preview** - See all extracted SVGs in an organized grid layout
- **⌨️ Keyboard Shortcut** - Quick access with `Ctrl+B` (Windows/Linux) or `Cmd+B` (Mac)
- **🎨 Clean Interface** - Beautiful, modern UI with cards for each SVG
- **📱 Responsive Design** - Works seamlessly across different screen sizes

## 🚀 Installation

### From Chrome Web Store (Recommended)

_Coming soon!_

### Manual Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/svg-extractor.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" in the top right corner

4. Click "Load unpacked" and select the `svg-extractor` folder

5. The extension icon should appear in your browser toolbar

## 📖 Usage

### Method 1: Extension Icon

1. Navigate to any webpage containing SVG images
2. Click the SVG Extractor icon in your browser toolbar
3. A new window will open displaying all found SVG images
4. Click "Download" under any SVG to save it as a `.svg` file

### Method 2: Keyboard Shortcut

1. Press `Ctrl+B` (Windows/Linux) or `Cmd+B` (Mac) while on any webpage
2. Follow steps 3-4 from Method 1

### Example Workflow

```
🌐 Visit a website → 🖱️ Click extension icon → 👀 Preview SVGs → ⬇️ Download desired SVGs
```

## 🛠️ Technical Details

### Technologies Used

- **Manifest V3** - Latest Chrome extension architecture
- **Vanilla JavaScript** - Pure JS for maximum compatibility and performance
- **Chrome Scripting API** - For content script injection
- **CSS3** - Modern styling with flexbox layouts

### File Structure

```
svg-extractor/
├── manifest.json          # Extension configuration
├── background.js          # Service worker and main logic
├── svg-reader.js         # SVG detection and processing
├── index.html            # Popup interface
├── styles.css            # Styling (development)
├── focus-mode.css        # Additional styling
└── images/               # Extension icons
    ├── icon-16.png
    ├── icon-32.png
    ├── icon-48.png
    └── icon-128.png
```

## 🔧 Development

### Prerequisites

- Google Chrome (latest version)
- Basic knowledge of JavaScript and Chrome Extensions

### Local Development

1. Make your changes to the source files
2. Go to `chrome://extensions/`
3. Click the refresh icon on the SVG Extractor extension card
4. Test your changes on any webpage

### Building for Production

The extension is ready to use as-is. For distribution:

1. Zip the entire project folder (excluding `.git`)
2. Upload to Chrome Web Store Developer Dashboard

## 🤝 Contributing

Contributions are welcome! Here are some ways you can help:

- 🐛 **Report bugs** - Found an issue? Let us know!
- 💡 **Suggest features** - Have an idea? We'd love to hear it!
- 🔧 **Submit PRs** - Fix bugs or add features
- 📖 **Improve docs** - Help make the documentation better

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and test thoroughly
4. Commit with descriptive messages
5. Push and create a Pull Request

## 📝 Roadmap

- [ ] 🏪 Chrome Web Store publication
- [ ] 🎨 SVG format conversion (PNG, JPEG export)
- [ ] 📦 Bulk download (ZIP archive)
- [ ] 🔍 SVG search and filter functionality
- [ ] 📊 SVG statistics and information display
- [ ] 🌙 Dark/light theme toggle
- [ ] 🏷️ Custom naming for downloaded files

## 🐛 Known Issues

- Large SVGs might take a moment to process
- Some dynamically generated SVGs may not be detected immediately

## 📄 License

This project is licensed under the Apache License 2.0 - see the code headers for details.

---

<p align="center">
  ⭐ Star this repo if you found it helpful!
</p>
