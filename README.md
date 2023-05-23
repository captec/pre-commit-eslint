# pre-commit-eslint
Repo for use with the [pre-commit](https://pre-commit.com/) tool that runs eslint with typescript-eslint

# Example configuration
```yaml
  - repo: ../pre-commit-eslint
    rev: 0.6.1
    hooks:
    -   id: eslint
        types_or: [ts, tsx] 
        verbose: true
```
