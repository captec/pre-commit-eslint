# pre-commit-eslint
Repo for use with the [pre-commit](https://pre-commit.com/) tool that runs eslint with typescript-eslint

# Example configuration
```yaml
  - repo: https://github.com/captec/pre-commit-eslint.git
    rev: 0.6.1
    hooks:
    -   id: eslint
        types_or: [ts, tsx] 
        verbose: true
```
