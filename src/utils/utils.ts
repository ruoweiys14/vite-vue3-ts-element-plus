/**
 * 将数组转为 tree
 * @param data
 * @returns
 */
export const arrayToTree = (data = []) => {
    // 根节点
    const roots = data.filter(({ parent }) => !parent);
    const getChildren = (parents: any) => {
        parents.forEach((p) => {
            p.children = data.filter((d) => d.parent === p.value);
            getChildren(p.children);
        });
    };

    getChildren(roots);
    return roots;
};
