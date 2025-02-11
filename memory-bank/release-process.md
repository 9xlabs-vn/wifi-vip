# Release Process Guidelines

## Release Rules

1. **Branch Protection**
   - Direct commits to `develop` and `main` branches are prohibited
   - All changes must be made through feature branches
   - Feature branches must follow the pattern: `feature/description-of-change`
   - Release branches should follow the pattern: `release/vX.Y.Z`

2. **Pre-Release Process**
   - Create a feature branch for your changes if one doesn't exist
   - Create a draft release in GitHub before starting the release process
   - Document all changes and updates in the draft release notes
   - List all feature branches to be included
   - Include any breaking changes or important notes
   - Update memory bank documentation to reflect changes:
     * This is crucial for AI agents to understand project context
     * Update relevant .md files in the memory-bank directory
     * Document new features, changes in architecture, or process updates
     * Ensure AI agents can comprehend the latest state of the project

3. **Version Control**
   - Follow semantic versioning (MAJOR.MINOR.PATCH)
   - For internal releases, only bump PATCH version (Z)
   - For external releases (client releases), bump MINOR version (Y) and reset PATCH to 0
   - MAJOR version (X) stays synchronized with external releases
   - Update version in package.json
   - Create git tags only after final review
   - Tag format: `vX.Y.Z`

4. **Release Steps**
   ```bash
   # 1. Ensure you're working from a feature branch
   git checkout -b feature/your-change-description
   
   # 2. Make your changes and commit
   git add .
   git commit -m "feat: your change description"
   
   # 3. Push feature branch
   git push origin feature/your-change-description
   
   # 4. Create PR to develop branch
   # Use GitHub UI to create PR

   # 5. After PR approval and merge to develop
   git checkout develop
   git pull origin develop

   # 6. Create release branch
   git checkout -b release/vX.Y.Z

   # 7. Update version in package.json
   # Edit package.json version

   # 8. Update memory bank documentation
   # Update relevant .md files in memory-bank directory

   # 9. Commit version and documentation updates
   git add memory-bank/*.md
   git commit -am "chore: bump version to X.Y.Z and update documentation"

   # 10. Create draft release on GitHub
   # Use GitHub UI to create draft release

   # 11. Review and testing
   # Perform necessary testing

   # 12. After approval, create and push tag
   git tag -a vX.Y.Z -m "Release vX.Y.Z"
   git push origin vX.Y.Z

   # 13. Merge to main through PR
   # Create PR from release branch to main
   # After approval, merge PR

   # 14. Merge back to develop through PR
   # Create PR from release branch to develop
   # After approval, merge PR
   ```

5. **Release Notes Requirements**
   - Group changes by type (Features, Bug Fixes, etc.)
   - Include PR numbers and contributors
   - Document any breaking changes
   - List all dependencies updated
   - Include upgrade instructions if necessary
   - Clearly mark if it's an internal or external release
   - Reference updated memory bank documentation

6. **Review Process**
   - Code review must be completed
   - All tests must pass
   - Documentation must be updated
   - Memory bank documentation must be updated and reviewed
   - Release notes must be approved
   - Security scan must be clear

7. **Post-Release**
   - Deploy to staging environment first
   - Verify deployment
   - Monitor for any issues
   - Update project documentation
   - Notify team members
   - Verify memory bank documentation is complete and accurate

## Example Release Note Format

```markdown
# Release v1.0.0 (External Release)

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

## Documentation Updates
- Updated memory bank with new authentication flow
- Added system patterns for WebSocket handling
- Updated technical context with new dependencies

## Contributors
@username1, @username2

## Upgrade Guide
1. Update Node.js to v18+
2. Run npm install
3. Update authentication implementation
```

## Release Checklist

- [ ] Feature branch created for changes
- [ ] All changes committed to feature branch
- [ ] PR created and approved for feature branch
- [ ] Version updated in package.json
- [ ] Memory bank documentation updated
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

1. Create hotfix branch from `main`: `hotfix/description`
2. Fix the issue
3. Update patch version
4. Create release notes
5. Update memory bank if necessary
6. Create PRs to merge to `main` and `develop`
7. Deploy immediately after testing and approval

## Additional Notes

- Always maintain a changelog
- Keep release notes clear and concise
- Document any manual steps required
- Include rollback procedures
- Test deployment process in staging
- Never commit directly to develop or main branches
- Always create feature branches for changes
- Keep memory bank documentation up to date for AI assistance