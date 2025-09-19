# All-in-One PC Optimizer

A lightweight, premium Windows PC optimization tool developed by Abhi Khade.

![All-in-One PC Optimizer Interface]

## Features

- **Junk File Cleaner**: Scans and removes temporary files, browser cache, logs, and other unnecessary files
- **Startup Manager**: Manages programs that start automatically with Windows
- **Memory Booster**: Frees up RAM by closing unnecessary background applications
- **Disk Analyzer**: Analyzes disk usage and finds large and duplicate files
- **One-Click Optimization**: Runs all modules in a single click
- **Modern UI**: Clean, minimal interface with progress indicators
- **Statistics Tracking**: Keeps track of optimization history

## Developer

**Abhi Khade**
- GitHub: [https://github.com/Abhion24](https://github.com/Abhion24)

## Requirements

- Windows 10 or 11
- Python 3.7 or higher

## Installation

1. Clone or download this repository
2. Install the required Python packages:
   ```
   pip install -r requirements.txt
   ```

## Usage

### Running from Source Code
1. Navigate to the project directory
2. Run the application:
   ```
   python main.py
   ```
   
   Or double-click the `run_optimizer.bat` file.

### Building Executable
To create a standalone executable:

1. Run the build script:
   ```
   python build_exe.py
   ```

2. The executable will be created in the `dist` folder.

### Running Tests
To test all modules without affecting your system:
```
python test_modules.py
```

## Modules

### Junk File Cleaner
Cleans temporary files, browser cache, logs, and other unnecessary files to free up disk space.

### Startup Manager
Lists programs that start automatically with Windows. Allows enabling/disabling programs to improve boot time.

### Memory Booster
Frees up RAM by closing unnecessary background applications.

### Disk Analyzer
Analyzes disk usage and identifies large files and duplicates that can be removed to save space.

## Project Structure

See [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) for detailed information about the code organization.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
