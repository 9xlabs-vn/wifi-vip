# Release Process Guidelines

## Release Rules

1. **Branch Requirements**
   - Releases should only be created from the `develop` branch
   - Feature branches must be merged into `develop` before release
   - Release branches should follow the pattern: `release/vX.Y.Z`

2. **Pre-Release Process**
   - Create a draft release in GitHub before starting the release process
   - Document all changes and updates in the draft release notes
   - List all feature branches to be included
   - Include any breaking changes or important notes

3. **Version Control**
   - Follow semantic versioning (MAJOR.MINOR.PATCH)
   - Update version in package.json
   - Create git tags only after final review
   - Tag format: `vX.Y.Z`

4. **Release Steps**
   ```bash
   # 1. Ensure you're on develop branch
   git checkout develop
   git pull origin develop

   # 2. Create release branch
   git checkout -b release/vX.Y.Z

   # 3. Update version in package.json
   # Edit package.json version

   # 4. Commit version update
   git commit -am "chore: bump version to X.Y.Z"

   # 5. Create draft release on GitHub
   # Use GitHub UI to create draft release

   # 6. Review and testing
   # Perform necessary testing

   # 7. After approval, create and push tag
   git tag -a vX.Y.Z -m "Release vX.Y.Z"
   git push origin vX.Y.Z

   # 8. Merge to main
   git checkout main
   git merge release/vX.Y.Z
   git push origin main

   # 9. Merge back to develop
   git checkout develop
   git merge release/vX.Y.Z
   git push origin develop
   ```

5. **Release Notes Requirements**
   - Group changes by type (Features, Bug Fixes, etc.)
   - Include PR numbers and contributors
   - Document any breaking changes
   - List all dependencies updated
   - Include upgrade instructions if necessary

6. **Review Process**
   - Code review must be completed
   - All tests must pass
   - Documentation must be updated
   - Release notes must be approved
   - Security scan must be clear

7. **Post-Release**
   - Deploy to staging environment first
   - Verify deployment
   - Monitor for any issues
   - Update project documentation
   - Notify team members

## Example Release Note Format

```markdown
# Release v1.0.0

## Features
- [#123] Add authentication system
- [#124] Implement user dashboard

## Bug Fixes
- [#125] Fix login redirect issue
- [#126] Resolve memory leak in WebSocket connection

## Breaking Changes
- User authentication now requires email verification
- Updated minimum Node.js version to 18

## Dependencies
- Updated React to v18.3.1
- Added @auth/core v1.0.0

## Contributors
@username1, @username2

## Upgrade Guide
1. Update Node.js to v18+
2. Run npm install
3. Update authentication implementation
```

## Release Checklist

- [ ] All feature branches merged to develop
- [ ] Version updated in package.json
- [ ] All tests passing
- [ ] Documentation updated
- [ ] Release notes prepared
- [ ] Security scan completed
- [ ] Draft release created
- [ ] Team review completed
- [ ] Staging deployment verified
- [ ] Final approval received

## Emergency Hotfix Process

For critical bugs in production:

1. Create hotfix branch from `main`
2. Fix the issue
3. Update patch version
4. Create release notes
5. Merge to `main` and `develop`
6. Deploy immediately after testing

## Additional Notes

- Always maintain a changelog
- Keep release notes clear and concise
- Document any manual steps required
- Include rollback procedures
- Test deployment process in staging