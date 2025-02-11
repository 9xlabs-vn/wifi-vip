# Version Bump Rules

Version format: `x.y.z`

## Rules for Version Bumping

### Internal Releases
- Only bump right digit (z)
- Example: 1.0.1 -> 1.0.2
- The left digit (x) remains synchronized with the latest external release version
- Internal releases do not change x or y digits

### External Releases (Client Releases)
- Must be explicitly specified as external release
- Reset right digit to 0
- Bump center digit (y)
- Example: 1.0.5 -> 1.1.0
- The left digit (x) indicates major version aligned with external releases

### Major Changes
- Only applicable for external releases
- Reset right digit to 0
- Reset center digit to 0
- Bump left digit (x)
- Example: 1.2.3 -> 2.0.0

## Examples

1. Internal bug fixes/minor improvements:
   - 1.0.0 -> 1.0.1 -> 1.0.2 -> 1.0.3
   (x digit remains same as latest external release)

2. External release with new features:
   - 1.0.3 -> 1.1.0
   (explicitly specified as external release)

3. Major architectural changes (external):
   - 1.1.0 -> 2.0.0