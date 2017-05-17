<?php

namespace AppBundle\EventListener;

use Symfony\Component\HttpFoundation\File\UploadedFile;
use Doctrine\ORM\Event\LifecycleEventArgs;
use AppBundle\Entity\Dishes;
use AppBundle\Services\ImageUploader;

class ImageUploadListener
{
    /**
     * @var ImageUploader service
     */
    private $uploader;

    public function __construct(ImageUploader $uploader)
    {
        $this->uploader = $uploader;
    }

    /**
     * upload image file before insert
     * @param LifecycleEventArgs $args
     */
    public function prePersist(LifecycleEventArgs $args)
    {
        $entity = $args->getEntity();

        $this->uploadFile($entity);
    }

    private function uploadFile($entity)
    {
        // upload only works for Images entities
        if (!$entity instanceof Dishes) {
            return;
        }
        $file = $entity->getPath();
        // only upload new files
        if (!$file instanceof UploadedFile) {
            return;
        }
        $fileName = $this->uploader->upload($file);
        $entity->setName($fileName);
        $entity->setPath($fileName);
    }
}