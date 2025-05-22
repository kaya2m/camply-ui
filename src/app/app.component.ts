import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TheCamply';

  features = [
    {
      icon: '📱',
      title: 'Sosyal Medya Paylaşımı',
      description: 'Kamp deneyimlerinizi fotoğraflarla paylaşın ve topluluğa katılın'
    },
    {
      icon: '📝',
      title: 'Blog Yazıları',
      description: 'Detaylı kamp hikayelerinizi yazın ve deneyimlerinizi aktarın'
    },
    {
      icon: '🗺️',
      title: 'Kamp Alanları',
      description: 'Harita üzerinde kamp alanlarını keşfedin ve paylaşın'
    },
    {
      icon: '📵',
      title: 'Çevrimdışı Kullanım',
      description: 'İnternet olmadan da içerik oluşturun ve daha sonra senkronize edin'
    },
    {
      icon: '👥',
      title: 'Topluluk',
      description: 'Benzer ilgi alanlarına sahip kampçılarla bağlantı kurun'
    },
    {
      icon: '🛒',
      title: 'E-Ticaret',
      description: 'Kamp ekipmanlarını keşfedin ve satın alın (yakında)'
    }
  ];

  phases = [
    {
      phase: 'Faz 1',
      title: 'MVP - Sosyal Medya & Blog',
      duration: '1-3 Ay',
      status: 'active',
      features: [
        'Kullanıcı kayıt ve giriş sistemi',
        'Gönderi paylaşımı ve fotoğraf yükleme',
        'Blog yazma ve düzenleme',
        'Sosyal etkileşimler (beğeni, yorum)',
        'Çevrimdışı taslak yazma'
      ]
    },
    {
      phase: 'Faz 2',
      title: 'Lokasyon Özellikleri',
      duration: '4-6 Ay',
      status: 'planned',
      features: [
        'Harita entegrasyonu',
        'Kamp alanları veritabanı',
        'Gelişmiş blog editörü',
        'İçerik keşfet algoritmaları',
        'V1.0 resmi lansmanı'
      ]
    },
    {
      phase: 'Faz 3',
      title: 'Topluluk & E-Ticaret',
      duration: '7-12 Ay',
      status: 'future',
      features: [
        'Kullanıcı katkılı lokasyon ekleme',
        'Değerlendirme ve puanlama sistemi',
        'Özel mesajlaşma',
        'E-ticaret altyapısı',
        'V2.0 lansmanı'
      ]
    }
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
