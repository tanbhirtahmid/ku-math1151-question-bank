#!/bin/bash
VERSION="$(git rev-list --count HEAD 2>/dev/null || echo 0)"
sed -i 's/\(href="style\.css\)?v=[^"]*"/\1"/' index.html
sed -i 's/\(src="script\.js\)?v=[^"]*"/\1"/' index.html
sed -i 's/href="style\.css"/href="style.css?v='$VERSION'"/' index.html
sed -i 's/src="script\.js"/src="script.js?v='$VERSION'"/' index.html
echo "Cache-busting version set to $VERSION"
