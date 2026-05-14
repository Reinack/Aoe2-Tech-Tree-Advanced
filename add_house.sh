#!/bin/bash
for file in public/src/data/civ/*.js; do
  if [ "$file" != "public/src/data/civ/huns.js" ]; then
    # Find the line number of the closing ]
    line=$(grep -n '^  ],' "$file" | head -1 | cut -d: -f1)
    if [ -n "$line" ]; then
      last_line=$((line - 1))
      last_item=$(sed -n "${last_line}p" "$file")
      # Check if already has "house"
      if ! grep -q '"house"' "$file"; then
        if [[ $last_item == *"," ]]; then
          # Has comma, add "house" after
          sed -i "${last_line}a\\
    \"house\"," "$file"
        else
          # No comma, add comma to last_item and add "house"
          sed -i "${last_line}s/$/,/" "$file"
          sed -i "${last_line}a\\
    \"house\"," "$file"
        fi
      fi
    fi
  fi
done