<?php

declare(strict_types=1);

namespace App\MoonShine\Resources\SliderImage;

use Illuminate\Database\Eloquent\Model;
use App\Models\SliderImage;
use App\MoonShine\Resources\SliderImage\Pages\SliderImageIndexPage;
use App\MoonShine\Resources\SliderImage\Pages\SliderImageFormPage;
use App\MoonShine\Resources\SliderImage\Pages\SliderImageDetailPage;

use MoonShine\Laravel\Resources\ModelResource;
use MoonShine\Contracts\Core\PageContract;

/**
 * @extends ModelResource<SliderImage, SliderImageIndexPage, SliderImageFormPage, SliderImageDetailPage>
 */
class SliderImageResource extends ModelResource
{
    protected string $model = SliderImage::class;

    protected string $title = 'SliderImages';
    
    /**
     * @return list<class-string<PageContract>>
     */
    protected function pages(): array
    {
        return [
            SliderImageIndexPage::class,
            SliderImageFormPage::class,
            SliderImageDetailPage::class,
        ];
    }
}
