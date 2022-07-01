module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
        "release",
      ],
    ],
    // 한글 커밋의 경우, 어순 때문에 대문자가 앞에 나올 수 있음.
    // 영문의 경우- build: add Dockerfile
    // 한글의 경우 - build: Dockerfile 추가
    // 아래를 허용하기 위해 설정 덮어씀.
    "subject-case": [2, "never", []],
  },
};
