from django_clickhouse.models import ClickHouseSyncModel
from django.db import models
from django_clickhouse.configuration import config
from django_clickhouse.clickhouse_models import ClickHouseModel
from datetime import date
from infi.clickhouse_orm import fields


class Any(ClickHouseModel):
    # def __init__(self):
    #     self._meta.concrete_model = ClickHouseModel
    #     super().__init__()
    #     self.timestamp = fields.Int32Field()
    #     self.name = fields.StringField()
    #     self.type = fields.StringField()
    #     self.value = fields.StringField()

    timestamp = fields.Int32Field()
    name = fields.StringField()
    type = fields.StringField()
    value = fields.StringField()

    # Any.objects.filter(name='0-141-55-37.pool.ukrtel.net')

    # # Servers, model is replicated to.
    # # Router takes random database to read or write from.
    # read_db_aliases = (config.DEFAULT_DB_ALIAS,)
    # write_db_aliases = (config.DEFAULT_DB_ALIAS,)
    #
    # # Databases to perform replicated migration queries, such as ALTER TABLE.
    # # Migration is applied to random database from the list.
    # migrate_replicated_db_aliases = (config.DEFAULT_DB_ALIAS,)
    #
    # # Databases to perform non-replicated migrations (CREATE TABLE, DROP TABLE).
    # # Migration is applied to all databases from the list.
    # migrate_non_replicated_db_aliases = (config.DEFAULT_DB_ALIAS,)
