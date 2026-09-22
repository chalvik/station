<?php

declare(strict_types=1);

namespace App\MoonShine\Resources\Meet;

use App\Models\Meet;
use App\MoonShine\Resources\Meet\Pages\MeetDetailPage;
use App\MoonShine\Resources\Meet\Pages\MeetFormPage;
use App\MoonShine\Resources\Meet\Pages\MeetIndexPage;
use MoonShine\Contracts\Core\PageContract;
use MoonShine\Laravel\Resources\ModelResource;

/**
 * @extends ModelResource<Meet, MeetIndexPage, MeetFormPage, MeetDetailPage>
 */
class MeetResource extends ModelResource
{
    protected string $model = Meet::class;

    protected string $title = 'Заседания';

    /**
     * @return list<class-string<PageContract>>
     */
    protected function pages(): array
    {
        return [
            MeetIndexPage::class,
            MeetFormPage::class,
            MeetDetailPage::class,
        ];
    }
}
