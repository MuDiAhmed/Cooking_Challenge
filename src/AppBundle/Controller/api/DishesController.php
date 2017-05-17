<?php
/**
 * Created by PhpStorm.
 * User: mudi
 * Date: 17/05/17
 * Time: 05:33 ص
 */

namespace AppBundle\Controller\api;

use AppBundle\Entity\Dishes;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\View\View;
use AppBundle\Entity\Users;

class DishesController extends FOSRestController
{
    public function __construct() {
    }

    /**
     * @Rest\Get("/dishes")
     */
    public function getAction()
    {
        $allResult = $this->getDoctrine()->getRepository('AppBundle:Dishes')->findAll();
        if ($allResult === null) {
            return new View("user not found", Response::HTTP_NOT_FOUND);
        }
        return $allResult;
    }
    /**
     * @Rest\Post("/dishes")
     */
    public function postAction(Request $request)
    {
        $file = $request->files;
        $userID = $request->get('user');
        if(empty($file) || empty($userID))
        {
            return new View("NULL VALUES ARE NOT ALLOWED", Response::HTTP_NOT_ACCEPTABLE);
        }
        $user = $this->getDoctrine()->getRepository('AppBundle:Users')->find($userID);
        $dish = new Dishes();
        foreach($file as $uploadedFile) {
            $fileName = $this->container->get('images_uploader')->upload($uploadedFile);
        }
//        $fileName = $this->container->get('images_uploader')->upload($file);
        $dish->setName($fileName);
        $dish->setPath($fileName);
        $dish->setUser($user);
        $manager = $this->getDoctrine()->getManager();
        $manager->persist($dish);
        $manager->flush();
        $responseData = ['message'=>'Dish Added Successfully','data'=>$dish];
        return new View($responseData, Response::HTTP_OK);
    }
}