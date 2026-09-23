<?php

declare(strict_types=1);

namespace App\MoonShine\Layouts;

use App\MoonShine\Resources\Compostion\CompostionResource;
use App\MoonShine\Resources\Meet\MeetResource;
use App\MoonShine\Resources\MenuItem\MenuItemResource;
use App\MoonShine\Resources\News\NewsResource;
use App\MoonShine\Resources\Page\PageResource;
use App\MoonShine\Resources\SliderImage\SliderImageResource;
use MoonShine\ColorManager\ColorManager;
use MoonShine\ColorManager\Palettes\PurplePalette;
use MoonShine\Contracts\ColorManager\ColorManagerContract;
use MoonShine\Contracts\ColorManager\PaletteContract;
use MoonShine\Laravel\Layouts\AppLayout;
use MoonShine\MenuManager\MenuItem;

final class MoonShineLayout extends AppLayout
{
    /**
     * @var null|class-string<PaletteContract>
     */
    protected ?string $palette = PurplePalette::class;

    protected function assets(): array
    {
        return [
            ...parent::assets(),
        ];
    }

    protected function menu(): array
    {
        return [
            ...parent::menu(),
            MenuItem::make(PageResource::class, 'Текстовые страницы'),
            MenuItem::make(NewsResource::class, 'Новости'),
            MenuItem::make(SliderImageResource::class, 'Картинки слайдера'),
            MenuItem::make(MenuItemResource::class, 'Меню'),
            MenuItem::make(CompostionResource::class, 'Состав попечительского совета'),
            MenuItem::make(MeetResource::class, 'Заседания'),
        ];
    }

    /**
     * @param  ColorManager  $colorManager
     */
    protected function colors(ColorManagerContract $colorManager): void
    {
        parent::colors($colorManager);

        // $colorManager->primary('#00000');
    }

    protected function isAlwaysDark(): bool
    {
        return false; // Светлая тема по умолчанию / отключение принудительного темного режима
    }
}
