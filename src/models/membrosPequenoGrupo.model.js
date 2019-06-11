module.exports = (sequelize, DataTypes) => {
    const membrospequenogrupo = sequelize.define('membrospequenogrupo', {
        id: { primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true, unique: true },
    })

    membrospequenogrupo.associate = (models) => {

        membrospequenogrupo.belongsTo(models.pequenosgrupos);
        membrospequenogrupo.belongsTo(models.membros);
    };

    return membrospequenogrupo
};