import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateTableAnnouncement1633117967100
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "announcements",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "segment",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "id_advertiser",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "location",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "type",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "url",
            type: "varchar",
            isNullable: false,
          },
        ],
      })
    );

    const fkIdAdvertiser = new TableForeignKey({
      columnNames: ["id_advertiser"],
      referencedTableName: "advertisers",
      referencedColumnNames: ["id"],
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    await queryRunner.createForeignKey("announcements", fkIdAdvertiser);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
