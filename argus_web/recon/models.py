from django_clickhouse.clickhouse_models import ClickHouseModel
from infi.clickhouse_orm import fields


class Any(ClickHouseModel):
    timestamp = fields.Int32Field()
    name = fields.StringField()
    type = fields.StringField()
    value = fields.StringField()
