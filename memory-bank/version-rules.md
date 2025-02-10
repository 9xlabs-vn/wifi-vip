# Version Bump Rules

Version format: `x.y.z`

## Rules for Version Bumping

### Internal Releases
- Only bump right digit (z)
- Example: 0.0.1 -> 0.0.2

### External Releases
- Reset right digit to 0
- Bump center digit (y)
- Example: 0.0.5 -> 0.1.0

### Major Changes
- Reset right digit to 0
- Reset center digit to 0
- Bump left digit (x)
- Example: 0.2.3 -> 1.0.0

## Examples

1. Internal bug fixes/minor improvements:
   - 0.0.1 -> 0.0.2 -> 0.0.3

2. External release with new features:
   - 0.0.3 -> 0.1.0

3. Major architectural changes:
   - 0.1.0 -> 1.0.0