# Contributing to Mediqueueless Website

## How to Contribute

### Reporting Issues
Found a bug or have a suggestion? Please create an issue in the repository.

### Making Changes

1. **Create a branch** for your feature:
```bash
git checkout -b feature/your-feature-name
```

2. **Make your changes** in the component files

3. **Test locally**:
```bash
npm run dev
# Visit http://localhost:5173
```

4. **Commit your changes**:
```bash
git add .
git commit -m "Brief description of changes"
```

5. **Push and create a Pull Request**:
```bash
git push origin feature/your-feature-name
```

## Code Style

- Use React functional components with hooks
- Keep components focused and reusable
- Use meaningful variable and function names
- Add comments for complex logic
- Maintain existing CSS organization

## File Structure Guidelines

- Components in `src/components/`
- Styles in `src/App.css` (single file for performance)
- Images in `src/assets/` (use relative paths)
- Keep component files small and focused

## Testing

Before submitting:
1. ✅ Run `npm run build` - no errors
2. ✅ Test locally with `npm run dev`
3. ✅ Check all sections render correctly
4. ✅ Test on mobile devices
5. ✅ Verify links and forms work

## Performance Tips

- Minimize re-renders
- Use CSS animations instead of JS when possible
- Lazy load images
- Keep bundle size small
- Use relative paths for all assets

## Questions?

Open an issue or contact the team directly.

Thank you for contributing! 🚀
