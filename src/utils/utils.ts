import _ from 'lodash';
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

// 给树的每一层加路径，记录每个节点的所有父节点路径
export const trackPath = (data, paths = [], pathKey = 'value') => {
    if (_.isEmpty(data)) {
        return void 0;
    }

    if (Array.isArray(data)) {
        return _.map(data, (item) => trackPath(item, []));
    }

    if (typeof data === 'object') {
        data.paths = [...paths, data[pathKey]];
        data.children = (data.children ?? []).map((item) => {
            return trackPath(item, data.paths);
        });

        return data;
    }
};
// tree扁平化方法
export const treeToArray = (tree: any) => {
    return _.reduce(
        tree,
        (res, item) => {
            const { children, ...i } = item;
            return res.concat(i, children?.length ? treeToArray(children) : []);
        },
        []
    );
};
