using ShopeeClone.Backend.Core.Repositories.Query.Base;

namespace ShopeeClone.Backend.Infrastructure.Repositories.Query.Base
{
    public class QueryRepository<T> : IQueryRepository<T>
        where T : class { }
}
