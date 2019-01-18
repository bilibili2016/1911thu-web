module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    globals: {
        $: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        'standard',
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential'
    ],
    // required to lint *.vue files
    plugins: ['vue'],

    rules: {
        // 以下规则完全禁用
        'padded-blocks': 0,
        'no-useless-escape': 0,
        'space-before-function-paren': 0
            // 以下规则改为警告级别是为了开发调试方便，正式上线前应消除掉所有警告才是规范的代码
            // 'no-debugger': 1,
            // 'quotes': 1,
            // 'no-unused-vars': 1,
            // 'no-unreachable': 1,
            // 'no-trailing-spaces': 1,
            // 'no-multiple-empty-lines': 1
    }
}