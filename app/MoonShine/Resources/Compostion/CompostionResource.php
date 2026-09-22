<?php

declare(strict_types=1);

namespace App\MoonShine\Resources\Compostion;

use App\Models\Compostion;
use App\MoonShine\Resources\Compostion\Pages\CompostionDetailPage;
use App\MoonShine\Resources\Compostion\Pages\CompostionFormPage;
use App\MoonShine\Resources\Compostion\Pages\CompostionIndexPage;
use MoonShine\Contracts\Core\PageContract;
use MoonShine\Laravel\Resources\ModelResource;

/**
 * @extends ModelResource<Compostion, CompostionIndexPage, CompostionFormPage, CompostionDetailPage>
 */
class CompostionResource extends ModelResource
{
    protected string $model = Compostion::class;

    protected string $title = 'Состав попечительского совета';

    /**
     * @return list<class-string<PageContract>>
     */
    protected function pages(): array
    {
        return [
            CompostionIndexPage::class,
            CompostionFormPage::class,
            CompostionDetailPage::class,
        ];
    }
}
