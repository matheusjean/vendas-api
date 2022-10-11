import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class News1665450351133 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'news',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: `uuid_generate_v4()`,
          },
          {
            name: 'hat',
            type: 'varchar',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'text',
            type: 'varchar',
          },
          {
            name: 'author',
            type: 'varchar',
          },
          {
            name: 'image',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'link',
            type: 'varchar',
          },
          {
            name: 'isActive',
            type: 'boolean',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: `now()`,
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: `now()`,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('news');
  }
}
